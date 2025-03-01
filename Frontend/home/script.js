function validateForm(formData) {
    const errors = {};

    // Name Validation: Only letters, spaces, and at least 2 characters
    if (!/^[A-Za-z\s]{2,}$/.test(formData.name)) {
        errors.name = "Name must contain only letters and be at least 2 characters long.";
    }

    // Email Validation: Standard email format
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = "Invalid email format.";
    }

    // Phone Number Validation: Must be 10-15 digits, allowing spaces, dashes, and country code
    if (!/^\+?\d{10,15}$/.test(formData.phone)) {
        errors.phone = "Phone number must be 10 to 15 digits long.";
    }

    // Address Validation: Minimum 5 characters, allows letters, numbers, spaces, and common punctuation
    if (!/^[A-Za-z0-9\s,.'-]{5,}$/.test(formData.address)) {
        errors.address = "Address must be at least 5 characters long.";
    }

    return errors;
}

const validationErrors = validateForm(formData);
if (Object.keys(validationErrors).length === 0) {
    console.log("Form is valid!");
} else {
    console.log("Validation errors:", validationErrors);
}
