from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3

app = Flask(__name__)
app.secret_key = "campusconnect_secret_key"


# ---------------- HOME ----------------
@app.route("/")
def home():
    return render_template("index.html")


# ---------------- LOGIN ----------------
@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()

        cursor.execute(
            "SELECT * FROM users WHERE email=? AND password=?",
            (email, password)
        )

        user = cursor.fetchone()

        conn.close()

        if user:
            session["user"] = user[1]      # Full Name
            return redirect(url_for("dashboard"))
        else:
            return "❌ Invalid Email or Password"

    return render_template("login.html")


# ---------------- REGISTER ----------------
@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        fullname = request.form["fullname"]
        usn = request.form["usn"]
        email = request.form["email"]
        phone = request.form["phone"]
        password = request.form["password"]

        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()

        try:
            cursor.execute(
                """
                INSERT INTO users(fullname, usn, email, phone, password)
                VALUES(?,?,?,?,?)
                """,
                (fullname, usn, email, phone, password)
            )

            conn.commit()

        except sqlite3.IntegrityError:
            conn.close()
            return "❌ Email or USN already exists!"

        conn.close()

        return redirect(url_for("login"))

    return render_template("register.html")


# ---------------- DASHBOARD ----------------
@app.route("/dashboard")
def dashboard():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template(
        "dashboard.html",
        username=session["user"]
    )


# ---------------- ABOUT ----------------
@app.route("/about")
def about():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("about.html")


# ---------------- CONTACT ----------------
@app.route("/contact")
def contact():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("contact.html")


# ---------------- ROADMAP ----------------
@app.route("/roadmap")
def roadmap():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("roadmap.html")


# ---------------- CODING ----------------
@app.route("/coding")
def coding():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("coding.html")


# ---------------- PROJECTS ----------------
@app.route("/projects")
def projects():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("projects.html")


# ---------------- RESUME ----------------
@app.route("/resume")
def resume():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("resume.html")


# ---------------- AI MENTOR ----------------
@app.route("/ai")
def ai():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("ai.html")


# ---------------- PROGRESS TRACKER ----------------
@app.route("/progress")
def progress():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("progress.html")


# ---------------- INTERVIEW PREPARATION ----------------
@app.route("/interview")
def interview():

    if "user" not in session:
        return redirect(url_for("login"))

    return render_template("interview.html")


# ---------------- LOGOUT ----------------
@app.route("/logout")
def logout():

    session.pop("user", None)

    return redirect(url_for("login"))


# ---------------- RUN APP ----------------
if __name__ == "__main__":
    app.run(debug=True)