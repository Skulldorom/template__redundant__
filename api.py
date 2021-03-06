from flask import Flask, Blueprint, jsonify, request, session
from app import db
from models import User
from werkzeug.security import generate_password_hash, check_password_hash
from log import log
from flask_login import login_user, login_required, logout_user, current_user
from flask_wtf.csrf import generate_csrf


api = Blueprint("api", __name__)


@api.route("/api/csrf")
def get_csrf():
    response = {"detail": "success", "X-CSRFToken": generate_csrf()}
    return response


@api.route("/api/test")
def test():
    print(session) if session else print("No session")
    print("Yay you can communicate with the server!")
    from Components.Initializer import create

    created = create()
    if created:
        response = {"status": "success", "message": "Databse initialized"}
    else:
        response = {"status": "Meh", "message": "Nothing really happened..."}

    return response


@api.route("/api/check", methods=["GET"])
def check():
    if current_user.is_authenticated:
        response = jsonify(status=True)
    else:
        Sess = True if session else False
        response = jsonify(status=False, sess=Sess)
    return response


@api.route("/api/auth/logout")
@login_required
def logout():
    logout_user()
    response_object = {"status": "success", "message": "User logged out"}
    return jsonify(response_object), 202


@api.route("/api/auth/login", methods=["POST"])
def login():
    post_data = request.get_json()

    email = post_data["email"].lower()
    password = post_data["password"]
    r = post_data["remember"]

    user = User.query.filter_by(email=email).first()

    if user:
        if check_password_hash(user.password, password):
            login_user(user, remember=r)
            response_object = {
                "status": "success",
                "message": "Welcome, " + current_user.fname,
            }
            log(current_user.email, " has logged in").success()
            return jsonify(response_object), 202

        """ If user exists but password was wrong"""

        response_object = {
            "status": "fail",
            "message": "Please check your email and password.",
        }
        return jsonify(response_object), 200

    """ If no user is found """
    response_object = {"status": "fail", "message": "There is no user with that email."}
    return jsonify(response_object), 200


@api.route("/api/auth/create", methods=["POST"])
def create():
    post_data = request.get_json()

    email = post_data["email"].lower()
    fname = post_data["fname"]
    lname = post_data["lname"]
    password = post_data["password"]
    telephone = post_data["telephone"]

    if User.query.filter_by(email=email).first():
        response_object = {"status": "fail", "message": "Email already exists."}
        return jsonify(response_object), 406

    if User.query.filter_by(telephone=telephone).first():
        response_object = {"status": "fail", "message": "Phone number already exists."}
        return jsonify(response_object), 406

    newuser = User(
        email,
        fname,
        lname,
        telephone,
        generate_password_hash(password, method="sha256"),
    )

    db.session.add(newuser)
    db.session.commit()

    response_object = {"status": "success", "message": "Account created successfully"}

    log("Account created successfully").success()
    return jsonify(response_object), 202
