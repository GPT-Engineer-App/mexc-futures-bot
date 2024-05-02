import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaCopy, FaPlay, FaStop, FaSync } from "react-icons/fa";

const Index = () => {
  const [isTrading, setIsTrading] = useState(false);
  const toast = useToast();

  const handleStartTrading = () => {
    setIsTrading(true);
    toast({
      title: "Trading started",
      description: "The bot has started trading.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleStopTrading = () => {
    setIsTrading(false);
    toast({
      title: "Trading stopped",
      description: "The bot has stopped trading.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleCopyTrading = () => {
    toast({
      title: "Copy Trading Enabled",
      description: "The bot is now copying trades from the selected leader.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Mexc Futures Bot
        </Heading>
        <Text textAlign="center">Manage your automated trading and copy trading settings.</Text>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Stack spacing={3}>
            <Input placeholder="API Key" size="md" />
            <Input placeholder="API Secret" size="md" />
            <Button leftIcon={<FaPlay />} colorScheme="green" onClick={handleStartTrading} isDisabled={isTrading}>
              Start Trading
            </Button>
            <Button leftIcon={<FaStop />} colorScheme="red" onClick={handleStopTrading} isDisabled={!isTrading}>
              Stop Trading
            </Button>
            <Button leftIcon={<FaCopy />} colorScheme="blue" onClick={handleCopyTrading}>
              Enable Copy Trading
            </Button>
            <Button leftIcon={<FaSync />} colorScheme="teal">
              Sync Settings
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
