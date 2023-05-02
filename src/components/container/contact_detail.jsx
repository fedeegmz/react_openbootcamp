import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
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
