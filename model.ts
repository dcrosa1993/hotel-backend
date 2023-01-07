export type Reservation = {
  id: String;
  state: String;
  manager: String;
  dateIn: Date;
  dateOut: Date;
  room: String;
  nightTotal: String;
  nightPay: String;
  note: String;
  type: String;
  guests: [Guest];
  noFlight: String;
  airline: String;
  timeIn: String;
  timeOut: String;
};

export type Guest = {
  fullName: String;
  passport: String;
  email: String;
  phone: String;
  isChildren: boolean;
};
