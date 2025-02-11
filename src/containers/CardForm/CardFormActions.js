import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";

import { CardFormStyles } from "./CardForm.styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#41d5ab",
      contrastText: "#fff"
    },
    secondary: red
  }
});

class CardFormActions extends Component {
  handleDelete = () => {
    const { handleDelete, cardId } = this.props;
    handleDelete(cardId);
  };

  render() {
    const { pristine, handleDelete, handleClose } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CardFormStyles.ButtonContainer
          data-testid="card-form-actions-container"
          fullWidth
        >
          <Button
            color="primary"
            variant="contained"
            margin="normal"
            type="submit"
            disabled={pristine}
          >
            <SaveIcon />
          </Button>
          {handleDelete && (
            <Button
              color="secondary"
              variant="contained"
              margin="normal"
              onClick={this.handleDelete}
              styled={{ backgroundColor: "#a81515" }}
            >
              <DeleteIcon />
            </Button>
          )}
          <Button variant="contained" margin="normal" onClick={handleClose}>
            <CancelIcon />
          </Button>
        </CardFormStyles.ButtonContainer>
      </ThemeProvider>
    );
  }
}

CardFormActions.propTypes = {
  pristine: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleClose: PropTypes.func,
  cardId: PropTypes.number
};

export default CardFormActions;
