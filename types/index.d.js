/* eslint-disable no-unused-vars */

// Search parameters object structure
const SearchParamProps = {
    params: {}, // Object where keys are strings
    searchParams: {}, // Object where values can be strings, arrays, or undefined
  };
  
  // Gender types
  const Genders = ["Male", "Female", "Other"];
  
  // Appointment status types
  const Statuses = ["pending", "scheduled", "cancelled"];
  
  // User creation parameters
  const CreateUserParams = {
    name: "",
    email: "",
    phone: "",
  };
  
  // User object structure (inherits from CreateUserParams)
  const User = {
    ...CreateUserParams,
    $id: "", // Unique identifier
  };
  
  // Register user parameters
  const RegisterUserParams = {
    ...CreateUserParams,
    userId: "",
    birthDate: new Date(),
    gender: "",
    address: "",
    occupation: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    primaryPhysician: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    allergies: undefined,
    currentMedication: undefined,
    familyMedicalHistory: undefined,
    pastMedicalHistory: undefined,
    identificationType: undefined,
    identificationNumber: undefined,
    identificationDocument: undefined, // FormData
    privacyConsent: false,
  };
  
  // Create appointment parameters
  const CreateAppointmentParams = {
    userId: "",
    patient: "",
    primaryPhysician: "",
    reason: "",
    schedule: new Date(),
    status: "",
    note: undefined,
  };
  
  // Update appointment parameters
  const UpdateAppointmentParams = {
    appointmentId: "",
    userId: "",
    timeZone: "",
    appointment: {}, // Should be an Appointment object
    type: "",
  };
  