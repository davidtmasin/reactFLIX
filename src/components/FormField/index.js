import React from 'react';

function FormField({ label, type, value, name, onChange }) {

    return (

        <div>
            {/* Componentizando um pedaço do form */}
            <label>
                {label}
                <input
                    type={type}              
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>

    );
}

export default FormField;