import Card from "./card.components";

const Features = () => {
  return (
    <div id="features" className="py-[100px] max-w-[980px] mx-auto">
      <h2 className="text-[48px] text-center text-night-sky mb-[50px]">
        Features
      </h2>
      <div className="grid grid-cols-3 gap-x-[30px]">
        <Card
          title="Task Management"
          text='"Effortlessly manage your tasks with our intuitive task
          management system. Stay organized, prioritize tasks, and track
          your progress with ease."'
        />
        <Card
          title="Event Planning"
          text='"Plan and coordinate events seamlessly with our event planning feature. From scheduling to invitations, keep everything on track for a successful event."'
        />
        <Card
          title="Goal Tracking"
          text='"Set and achieve your goals effectively with our goal tracking feature. Monitor your progress, stay motivated, and celebrate your successes along the way."'
        />
      </div>
    </div>
  );
};

export default Features;
