export interface Trip {
  id?: number;
  tripName: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  transportation: string;
  notes: string;
  userEmail?: string; // <-- Add this
}
