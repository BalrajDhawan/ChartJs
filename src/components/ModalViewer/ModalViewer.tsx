import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

// Define interface for the action buttons
interface Action {
  label: string;
  onClick: () => void;
  color?: any
}

// Define the prop types using an interface
interface ModalViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: Action[];
}

const ModalViewer: React.FC<ModalViewerProps> = ({ isOpen, onClose, title, children, actions }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      fullWidth
      maxWidth="md"
    >
      {/* Title */}
      {title && <DialogTitle id="modal-title">{title}</DialogTitle>}

      {/* Content */}
      <DialogContent dividers>{children}</DialogContent>

      {/* Actions */}
      {actions && (
        <DialogActions>
          {actions.map((action, index) => (
            <Button 
                key={index}
                onClick={action.onClick}
                color={action.color}
            >
              {action.label}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ModalViewer;
