import React from "react";

import {Link} from 'react-router-dom'

import CustomButton from "../../styles/CustomButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({totalPrice, buttonText, onAddCart}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CustomButton
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        {buttonText}
      </CustomButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {totalPrice > 0 ? "장바구니 추가하기" : "수량을 미입력하셨습니다."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {totalPrice > 0
              ? "장바구니로 가시겠습니까?"
              : "수량을 1개 이상 입력해주세요!"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {totalPrice > 0 ? (
            <>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Link to="/cart">
                <Button onClick={onAddCart} color="primary">
                  Agree
                </Button>
              </Link>
            </>
          ) : (
            <Button onClick={handleClose}></Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
