const generateEmailTemplate = (data) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New Car Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Car Make:</strong> ${data.carMake}</p>
      <p><strong>Car Model:</strong> ${data.carModel}</p>
      <p><strong>Car Year:</strong> ${data.carYear}</p>
      <p><strong>Mileage:</strong> ${data.mileage || 'Not provided'}</p>
      <p><strong>Is Drivable:</strong> ${data.isDrivable ? 'Yes' : 'No'}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.details ? `<p><strong>Additional Details:</strong> ${data.details}</p>` : ''}
      <p style="margin-top: 20px;">Best regards,<br/>Valerii</p>
    </div>
  `;
};

module.exports = generateEmailTemplate;
