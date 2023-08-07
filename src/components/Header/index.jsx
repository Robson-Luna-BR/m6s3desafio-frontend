import {
  HeaderDashboard,
  Border,
  HeaderModal,
  HeaderModalTitle,
  Close,
} from "./style";
import { Button } from "../Button";

export function Header({ logOut, styled, textTitle, click }) {
  switch (styled) {
    case "HeaderDashboard":
      return (
        <>
          <HeaderDashboard>
            <Button styled="ButtonLogOut" click={logOut} text="Sair"></Button>
          </HeaderDashboard>

          <Border></Border>
        </>
      );

    case "HeaderModal":
      return (
        <>
          <HeaderModal>
            <HeaderModalTitle>{textTitle}</HeaderModalTitle>
            <Close onClick={click}>X</Close>
          </HeaderModal>
        </>
      );

    default:
  }
}
