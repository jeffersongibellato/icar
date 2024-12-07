import { Observable } from '@nativescript/core';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export class MainViewModel extends Observable {
  private currentDate: Date = new Date();
  private selectedDate: Date | null = null;
  private selectedTimeSlot: string | null = null;

  constructor() {
    super();
    this.generateCalendarDays();
    this.generateTimeSlots();
  }

  get currentMonth(): string {
    return format(this.currentDate, 'MMMM yyyy');
  }

  get address(): string {
    return '123 Sunset Boulevard, Los Angeles, CA 90028';
  }

  get timeSlots(): Array<{ time: string; isSelected: boolean }> {
    return [
      { time: '09:00 AM', isSelected: this.selectedTimeSlot === '09:00 AM' },
      { time: '10:00 AM', isSelected: this.selectedTimeSlot === '10:00 AM' },
      { time: '11:00 AM', isSelected: this.selectedTimeSlot === '11:00 AM' },
      { time: '01:00 PM', isSelected: this.selectedTimeSlot === '01:00 PM' },
      { time: '02:00 PM', isSelected: this.selectedTimeSlot === '02:00 PM' },
      { time: '03:00 PM', isSelected: this.selectedTimeSlot === '03:00 PM' },
    ];
  }

  private generateCalendarDays() {
    const start = startOfMonth(this.currentDate);
    const end = endOfMonth(this.currentDate);
    const days = eachDayOfInterval({ start, end });

    const weeks = [];
    let currentWeek = [];

    days.forEach((day) => {
      currentWeek.push({
        day: format(day, 'd'),
        isCurrentMonth: true,
        isSelected: this.selectedDate && format(day, 'yyyy-MM-dd') === format(this.selectedDate, 'yyyy-MM-dd'),
      });

      if (currentWeek.length === 7) {
        weeks.push({ week: currentWeek });
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeks.push({ week: currentWeek });
    }

    this.set('calendarDays', weeks);
  }

  private generateTimeSlots() {
    this.notifyPropertyChange('timeSlots', this.timeSlots);
  }

  onDayTap(args: any) {
    const tappedDay = args.object.bindingContext;
    this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), parseInt(tappedDay.day));
    this.generateCalendarDays();
  }

  onTimeSlotTap(args: any) {
    const tappedSlot = args.object.text;
    this.selectedTimeSlot = tappedSlot;
    this.generateTimeSlots();
  }

  onBookTap() {
    if (this.selectedDate && this.selectedTimeSlot) {
      alert(`Booking confirmed for ${format(this.selectedDate, 'MMM d, yyyy')} at ${this.selectedTimeSlot}`);
    } else {
      alert('Please select both a date and time slot');
    }
  }
}