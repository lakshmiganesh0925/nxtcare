import { Models } from "node-appwrite";

// Patient object structure
const Patient = {
  ...Models.Document,
  userId: "",
  name: "",
  email: "",
  phone: "",
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

// Appointment object structure
const Appointment = {
  ...Models.Document,
  patient: Patient,
  schedule: new Date(),
  status: "",
  primaryPhysician: "",
  reason: "",
  note: "",
  userId: "",
  cancellationReason: null,
};
