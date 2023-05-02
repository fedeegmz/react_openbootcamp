import React from 'react';
import { Contact } from '../../models/challenge1/contact.class';
import ContactComponent from './contact';
import PropTypes from 'prop-types';


const ContactDetail = ({ contact }) => {
    return (
        <div>
            Name: { contact.name }
            Lastname: { contact.lastname }
            Email: { contact.email }
            <ContactComponent is_inline={ contact.is_inline }></ContactComponent>
        </div>
    );
};


ContactDetail.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactDetail;
