import React from "react";

import Section from "../shared/section";
import ContactInfo from "./contact-info";
import Form from "./form";

import "./style.scss";
import { Reveal } from "../shared/Reveal";

const Contact = () => {
    return (
        <Section
            id="contact"
            title="Contact"
            colorTitle="Me"
            background="dark"
        >
        
            <div className="contact-content-wrapper">
                <Reveal>
                <ContactInfo />
                </Reveal>
                <Form />
            </div>
            
        </Section>
    );
};

export default Contact;
