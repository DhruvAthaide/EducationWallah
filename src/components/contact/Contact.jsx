import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe title="map" src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Amity University Mumbai, India</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>wizzweb41@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+91 9320693337</p>
              </div>
            </div>

            <form
              method="post"
              action="https://script.google.com/macros/s/AKfycbxpvzNt2npoYju9-niqrcTfK-gLDVFiDYmwfUDVN5clafDy55W1yOyoQRN1wcqSlVg8RA/exec"
              onsubmit="return validateForm();"
            >
              <h2>Feedback Form</h2>
              <br />
              <br />
              <label>Who are you? (Select one)</label>
              <br />
              <label>
                <input type="radio" name="AS A USER" value="student" />
                Student
              </label>
              <label>
                <input type="radio" name="AS A USER" value="teacher" />
                Teacher
              </label>
              <label>
                <input type="radio" name="AS A USER" value="parent" />
                Parent
              </label>
              <br />
              <br />
              <label>Why do you use the website:</label>
              <textarea
                name="I WANT TO"
                rows="4"
                placeholder="Enter your statement here"
              ></textarea>
              <label>What features do you want present in the website:</label>
              <textarea
                name="SO THAT I CAN"
                rows="4"
                placeholder="Enter your statement here"
              ></textarea>
              <label>Your story:</label>
              <textarea
                name="USER STORIES"
                rows="4"
                placeholder="Enter your statement here"
              ></textarea>
              <label>Feedback (Optional):</label>
              <textarea
                name="FEEDBACK FROM USERs"
                rows="4"
                placeholder="Enter your feedback here"
              ></textarea>
              <input type="submit" value="Submit" />
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
