import React from 'react'
import { Modal, Header, Icon, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

/*
 * A component file that renders a modal over top all page elements and blurs the background.
 *
 * Parameters -
 *   title (String): The title that is displayed on the top header of the modal
 *   open (Bool): Whether or not the modal is open
 *   setOpen (Func): The function to set the modal to open, usually "() => setOpen(true)"
 *   setClosed (Func): The function to set the modal to open, usually "() => setOpen(false)"
 *   content (React Element): The react element to be rendered in the body of the modal
 *   cancelText (String): The text an optional cancel button will contain
 *   submitText (String): The text an optional submit button will contain
 *   cancelAction (Func): The action an optional cancel button will complete
 *   submitAction (Func): The action an optional submit button will complete
 *   clickDimmerClose (Bool): Whether or not the modal can be closed by clicking in the dimmed area
 */
const PageModal = ({ title, open, setOpen, setClosed, content, cancelText, submitText, clickDimmerClose, cancelAction, submitAction }) => {
    return (
        <Modal
            onOpen={setOpen}
            onClose={setClosed}
            closeOnEscape={clickDimmerClose != null ? clickDimmerClose : true}
            closeOnDimmerClick={clickDimmerClose != null ? clickDimmerClose : true}
            open={open}
            style={{ width: '80%', borderRadius: '10px' }}
            mountNode={document.getElementById('rooty')}
        >
            <Header size='large'>
                {title}
            </Header>
            <Modal.Content>
                {content}
            </Modal.Content>
            <Modal.Actions>
                {cancelText && cancelAction &&
                    <Button color='red' inverted onClick={cancelAction}>
                        <Icon name='remove' /> {cancelText || 'Cancel'}
                    </Button>
                }
                {submitText && submitAction &&
                    <Button color='green' inverted onClick={submitAction}>
                        <Icon name='checkmark' /> {submitText || 'Submit'}
                    </Button>
                }
            </Modal.Actions>
        </Modal>
    )
}

PageModal.propTypes = {
    title: PropTypes.string,
    open: PropTypes.func,
    setOpen: PropTypes.func,
    setClosed: PropTypes.func,
    content: PropTypes.element,
    cancelText: PropTypes.string,
    submitText: PropTypes.string,
    clickDimmerClose: PropTypes.bool,
    cancelAction: PropTypes.func,
    submitAction: PropTypes.func
}

export default PageModal
