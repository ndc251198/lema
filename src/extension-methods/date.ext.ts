interface Date {
  addDay(day: number): Date;
}

Date.prototype.addDay = function(day: number) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + day);
  return date;
}