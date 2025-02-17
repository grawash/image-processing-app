import { useState } from "react";

function Welcome() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("User created successfully!");
        console.log("Response:", data);
      } else {
        alert("Error creating user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <div className="welcome-page-container">
      <div className="welcome-left-side">
        <div className="welcome-text">
            <h1>Welcome</h1>
            <p>Let's make your images even better</p>
        </div>
      </div>
      <div className="welcome-right-side">
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <h1>sign in</h1>
            <div>
                <label>First Name:</label>
                <input
                type="text"
                name="name"
                value={formData.firstName}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Welcome;
