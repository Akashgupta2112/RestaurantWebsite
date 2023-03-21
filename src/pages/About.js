import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign: 'center',
        p: '2', 
        "& h4": {
          fontWeight: 'bold',
          my: 2,
          fontSize: '2rem'
        },
        "& p" : {
          textAlign: 'justify'
        },
        "@media (max-width: 600px)" : {
          mt: 0,
          "& h4" : {
            fontSize: "1.5rem"
          }
        }
      }}>
        <Typography variant='h4'>
          Welcome, To My Resturant
        </Typography>
        <p>
          asdasdasd asdashjd bad an dsavbjhd abdajhs danvdshj asd kajsd abd jkabj dabj dabj
          asdasd asd asd asd aslmamk nsdakj amdjjkawd asndklandm aw dandkladn,nad ajdnadknad
          asdnaknsd ,w knad amd akdb na sdu ajdsahdk ahsbfjbaskdalk dajsdbk abda da ds dwoirjad
          adskndakjb adjadnm adkna smdmnikq dasodja rmn ashdlka sdlkasndp; kafm adjabd admad 
        </p>
        <p>
          asdasdasd asdashjd bad an dsavbjhd abdajhs danvdshj asd kajsd abd jkabj dabj dabj
          asdasd asd asd asd aslmamk nsdakj amdjjkawd asndklandm aw dandkladn,nad ajdnadknad
          asdnaknsd ,w knad amd akdb na sdu ajdsahdk ahsbfjbaskdalk dajsdbk abda da ds dwoirjad
          adskndakjb adjadnm adkna smdmnikq dasodja rmn ashdlka sdlkasndp; kafm adjabd admad
          asdihasjkdhkj adajks bdjabs jdbaj bdasjkbd ankfakjb asdajd jabsbdjk 
        </p>
      </Box>
    </Layout>
  )
}

export default About