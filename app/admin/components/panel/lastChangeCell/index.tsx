import {BaseType} from "@types";
import {transformDate} from "@/app/admin/components";

export const LastChangeCell = ({objectData}: { objectData: BaseType }) =>
    (objectData.modifyBy && objectData.updatedAt)
        ? <>Last modify by <b>{objectData.modifyBy}</b> at <b>{transformDate(new Date(objectData.updatedAt))}</b></>
        : <>Created by <b>{objectData.createdBy}</b> at <b>{transformDate(new Date(objectData.createdAt))}</b></>;
