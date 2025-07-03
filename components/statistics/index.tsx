import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Statistics = () => {
   return (
      <>
         <Box
            css={{
               pt: '$20',
               pb: '$16',
               px: '$6',
            }}
         >
            <Flex direction={'column'} align={'center'}>
               <Text
                  h3
                  css={{
                     textAlign: 'center',
                  }}
               >
                  Trusted by board members worldwide
               </Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
               >
                  BoardHub delivers measurable improvements in board efficiency, security, and governance
               </Text>
            </Flex>
            <Flex
               direction={'row'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  'gap': '4rem',
                  'pt': '$16',
                  '@sm': {
                     gap: '10rem',
                  },
               }}
            >
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     98%
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Reduction in meeting preparation time
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     100%
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Secure document management
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     45%
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Increase in governance efficiency
                  </Text>
               </Flex>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
