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
          active={type.id === mail.selectedType.id}
          onClick={() => mail.setSelectedType(type)}
          key={type.id}>
          {type.name}
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