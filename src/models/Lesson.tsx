export class Lesson {
  time: Date = new Date();
  teacher: string = '';
  name: string = '';
  duration: number = 90;
  id: number = 0;

  constructor(name: string, teacher: string, time: Date, duration: number, id: number) {
    this.name = name;
    this.teacher = teacher;
    this.time = time;
    this.duration = duration;
    this.id = id;
  }
};

export type LessonAutoCompleate = {
  name: string
  id: number
  teacherName: string
}
