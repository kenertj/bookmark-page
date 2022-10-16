import React, { useState } from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
    const [expanded, setExpanded] = useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <Box sx={{
            margin: '0 auto',
            width: '30%'
        }}>
            <Typography sx={{
                color: '#212542',
                textAlign: 'center',
                fontSize: '25px',
                fontWeight: '600'
            }}>Frequently Asked Questions</Typography>
            <Typography sx={{
                color: '#9c9ca6',
                textAlign: 'center',
                mb: '5vh',
                mt: '2vh'
            }}>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</Typography>
            <Accordion

                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                sx={{
                    mb: '5px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#4858c9' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px" sx={{
                        fontWeight: '400',
                        color: '#23233d',
                        fontSize: '14px'
                    }}
                    >What is Bookmark?</Typography>
                </AccordionSummary>
                <AccordionDetails
                >
                    <Typography fontSize="11px" textAlign="left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                sx={{
                    '&:before': {
                        display: 'none',
                    },
                    mb: '0px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#4858c9' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px" sx={{
                        fontWeight: '400',
                        color: '#23233d',
                        fontSize: '14px'
                    }}
                    >How can I request a new browser?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize="11px">
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                sx={{
                    '&:before': {
                        display: 'none',
                    },
                    mb: '5px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#4858c9' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px" sx={{
                        fontWeight: '400',
                        color: '#23233d',
                        fontSize: '14px'
                    }}
                    >Is there a mobile app?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize="11px">
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                sx={{
                    '&:before': {
                        display: 'none',
                    },
                    mb: '5px',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e7e7e9',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#4858c9' }} />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    sx={{
                        ':hover': {
                            color: "#f47c57"
                        },
                    }}
                >
                    <Typography fontSize="12px" sx={{
                        fontWeight: '400',
                        color: '#23233d',
                        fontSize: '14px'
                    }}
                    >What about other Chromium browsers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize="11px">
                        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Box sx={{
                textAlign: 'center'
            }}>
                <Button variant="contained" sx={{

                    textTransform: 'none',
                    borderRadius: '5px',


                    backgroundColor: '#5266df',
                    ':hover': {
                        backgroundColor: "#5266df",

                    },
                    mt: '4vh'



                }}>More Info</Button>
            </Box>

        </Box>
    )
}

export default Faq