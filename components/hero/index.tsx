import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Streamline Your Board Meetings{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     with{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     BoardHub
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  A secure, all-in-one solution for board meeting management that enhances governance, improves collaboration, and simplifies compliance.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Button>Request a Demo</Button>
                  <Button>Explore Features</Button>
               </Flex>
               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Secure document management
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Improved governance
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Simplified compliance
                  </Flex>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="mock.png" />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
