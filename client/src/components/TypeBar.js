import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const {mail} = useContext(Context)
  return (
    <ListGroup>
      {mail.types.map(type =>
        <ListGroup.Item
          style={{cursor:"pointer"}}
          active={type.id_mail_folder === mail.selectedType.id_mail_folder}
          onClick={() => mail.setSelectedType(type)}
          key={type.id_mail_folder}>
          {type.name_mail_folder}
        </ListGroup.Item>
        )}
    </ListGroup>
      );
});

export default TypeBar;








// const TypeBar = observer(() => {
//   return (
//     <div>
//
//     </div>
//   );
// });
