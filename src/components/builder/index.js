export default function calenderBuilder(value) {
  const startWeek = value.clone().startOf('isoWeek');
  const endWeek = value.clone().endOf('isoWeek');
  const day = startWeek.clone().subtract(1, 'day');
  const cal = [];
  while (day.isBefore(endWeek, 'day')) {
    cal.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }
  return cal;
}
