/* eslint-disable jsx-a11y/label-has-associated-control */
import { IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { Controller, useForm } from 'react-hook-form';
import CancelIcon from '@mui/icons-material/Cancel';
import useMutationCreateVehicle from '../hooks/useMutationCreateVehicle';

const PaperComponent = (props) => (
  <Draggable
    handle="#draggable-dialog-title"
    cancel={'[class*="MuiDialogContent-root"]'}
  >
    <Paper {...props} />
  </Draggable>
);

const AddVehicleForm = ({ isOpen, close }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    mutate: mutateCreate,
    isLoading: isLoadingCreate,
    isSuccess: isSuccessCreate,
    isError: isErrorCreate,
  } = useMutationCreateVehicle();

  const handleClose = () => {
    close();
  };

  const errorStyle = {
    border: '3px solid red',
  };
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <form
          className=""
          onSubmit={handleSubmit((data) => {
            mutateCreate(data);
          })}
        >
          <DialogTitle
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: 'move' }}
            id="draggable-dialog-title"
          >
            <span>Ajouter un véhicule</span>
            <IconButton onClick={handleClose} aria-label="delete">
              <CancelIcon fontSize="large" color="error" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nom
              </label>
              <Controller
                name="name"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    value={field.value}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nom du véhicule"
                    style={errors.name && { ...errorStyle }}
                  />
                )}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="wording" className="form-label">
                Immatriculation
              </label>
              <Controller
                name="immat"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    value={field.value}
                    type="text"
                    className="form-control"
                    id="immat"
                    placeholder="Numéro d'immatriculation"
                    style={errors.immat && { ...errorStyle }}
                  />
                )}
              />
            </div>
            {isSuccessCreate && (
              <div
                style={{ color: 'green', fontWeight: 'bold' }}
                className="d-grid gap-2 mb-3"
              >
                Le véhicule a bien été ajouté !
              </div>
            )}
            {isErrorCreate && (
              <div
                style={{ color: 'red', fontWeight: 'bold' }}
                className="d-grid gap-2 mb-3"
              >
                Erreur lors de l'ajout du véhicule !
              </div>
            )}
            <div className="d-grid gap-2">
              <LoadingButton
                type="submit"
                className=""
                color="success"
                variant="contained"
                loading={isLoadingCreate}
              >
                Ajouter
              </LoadingButton>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default AddVehicleForm;
