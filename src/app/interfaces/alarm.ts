export interface Alarm{
    id: number,
    description: string,
    last_time_medicine_taken: Date,
    interval: Date,
    duration_type: string,
    duration: number;
}