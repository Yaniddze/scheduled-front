import { FC } from "react";
import { useParams } from "react-router";
import { ShedulePageLink } from "./styled";

import { useServerQuery } from "../../../../hooks";
import { GetDetailedGroup } from "../../../../server";

// type
type SchedulePageParams = {
  id: string;
};

export const SchedulePage: FC = () => {
  const id = useParams<SchedulePageParams>().id;

  const { data } = useServerQuery(`detailedGroup-${id}`, GetDetailedGroup, {
    id: Number(id),
  });

  const toShow = data?.tasks.map((task) => {
    const splitted = task.date.split("-");

    return (
      <ShedulePageLink to={`/schedule/${id}/${task.date}`} key={task.date}>
        <h3>
          {new Date(
            Number(splitted[2]),
            Number(splitted[1]) - 1,
            Number(splitted[0])
          ).toLocaleDateString("ru-RU")}
        </h3>
      </ShedulePageLink>
    );
  });

  toShow?.reverse();

  return (
    <div>
      {toShow}
      {toShow?.length === 0 ? "Предметов нет" : ""}
    </div>
  );
};
