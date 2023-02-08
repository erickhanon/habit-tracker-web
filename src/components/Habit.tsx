interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return (
    <h1 className="bg-violet-900 w-20 h-20 text-white rounded flex justify-center items-center ">
      {props.completed}
    </h1>
  );
}
