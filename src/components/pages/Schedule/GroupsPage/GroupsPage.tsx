import React, { FC } from "react";
import { GroupCard } from "../../../ui/Group";
import { GroupPageContent } from "./styled";
import { GroupsSceleton } from "../../../ui/sceletons/Groups/Groups";
import { GetGroups } from "../../../../server";
import { useServerQuery } from "../../../../hooks";

export const GroupsPage: FC = () => {
  const { data, isFetching } = useServerQuery("groups", GetGroups, undefined);

  if (isFetching) return <GroupsSceleton count={6} />;

  return (
    <GroupPageContent>
      {data?.map((el) => (
        <GroupCard to={`/schedule/${el.id}`} key={el.id} group={el} />
      ))}
    </GroupPageContent>
  );
};
