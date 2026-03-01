import { Tabs, Box, Text } from "@radix-ui/themes";
import Pomodoro from "./Pomodoro";

export default function Tab() {
  return (
    <div>
      <Tabs.Root defaultValue="account" className="flex justify-center items-center flex-col">
        <Tabs.List className="flex gap-5">
          <Tabs.Trigger value="pomodoro">Pomodoro</Tabs.Trigger>
          <Tabs.Trigger value="tarefas">Tarefas</Tabs.Trigger>
          <Tabs.Trigger value="progresso">Progresso</Tabs.Trigger>
          <Tabs.Trigger value="habitos">Hábitos</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="pomodoro">
            <Pomodoro />
          </Tabs.Content>

          <Tabs.Content value="tarefas">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="progresso">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>

          <Tabs.Content value="habitos">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
}
