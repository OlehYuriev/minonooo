import { ORDER, SHORT } from "@/constants/days";

export function transformSchedule(schedule: Record<string, string>) {
  type Group = {
    days: string[];
    time: string;
  };

  const group = ORDER.reduce<Record<string, Group>>((acc, day) => {
    const time = schedule[day];

    if (!time) return acc;
    if (!acc[time]) {
      acc[time] = { days: [], time };
    }

    acc[time].days.push(day);
    return acc;
  }, {});

  const workDays = Object.values(group).map(({ days, time }) => {
    const first = SHORT[days[0]];
    const last = SHORT[days[days.length - 1]];

    return {
      days: days.length > 1 ? `${first} - ${last}` : SHORT[days[0]],
      time: time.replace("-", " - "),
    };
  });

  return workDays;
}
