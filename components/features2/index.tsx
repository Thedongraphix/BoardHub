import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Flex} from '../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',

               '@sm': {
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            <Flex direction="column" align={'center'}>
               <Text span css={{color: '$blue600'}}>
                  Enhanced Governance
               </Text>
               <Text h3>Advanced Board Management Features</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  BoardHub provides powerful tools to help your organization maintain compliance and elevate governance standards.
               </Text>

               <Flex
                  justify={'center'}
                  wrap={'wrap'}
                  css={{
                     py: '$10',
                  }}
               >
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Meeting Minutes
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Automated minutes creation with approval workflows
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Advanced Security
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Enterprise-grade encryption and access controls
                        </Text>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
