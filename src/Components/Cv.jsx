import Example from "./CvExample";
import Form from "./Form";
import React, {useState} from "react";
import '../styles/cv-example.css';

function Parent() {

    const [fullName, setFullName] = useState("");
    const [profession, setProfession] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [language, setLanguage] =useState([""]);
    const [summary, setSummary] = useState("");

    const handleFullNameChange = (e) => {
        setFullName(e.target.value)
    }

    const handleProfessionChange = (e) => {
        setProfession(e.target.value)
    }

    const handleTelChange = (e) => {
        setTel(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleLinkedinChange = (e) => {
        setLinkedin(e.target.value);
    }

    const handleGithubChange = (e) => {
        setGithub(e.target.value);
    }

    const handleAddLanguage = () => {
        const newLanguage = document.getElementById("languageInput").value.trim(); // Trim whitespace
    
        if (newLanguage) { // Check if the newLanguage is not empty
            setLanguage(l => [...l, newLanguage]);
            document.getElementById("languageInput").value = ""; // Clear the input
        }
    };
    
    
    const handleRemoveLanguage = (index) => {

        setLanguage(language.filter((_, i) => i !== index));
    }

    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    }

    return(
        <main className="main-container">
            <Example fullName={fullName}
                     profession={profession}
                     tel={tel}
                     email={email}
                     linkedin={linkedin}
                     github={github}
                     languages={language}
                     summary={summary}
                     handleRemoveLanguage={handleRemoveLanguage}

                />
            <Form   fullName={fullName}
                    handleFullName={handleFullNameChange}
                    profession={profession}
                    handleProfession={handleProfessionChange}
                    handleTel={handleTelChange}
                    handleEmail={handleEmailChange}
                    handleLinkedin={handleLinkedinChange}
                    handleGithub={handleGithubChange}
                    handleSummary={handleSummaryChange}
                    handleAddLanguage={handleAddLanguage}
                />
        </main>
    )
}

export default Parent;