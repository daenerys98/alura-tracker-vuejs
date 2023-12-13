import { createApp, App } from 'vue';

interface EventBusType {
  componentContext: Record<string, any> | null;
  $emit: (event: string, ...args: any[]) => void;
  $on: (event: string, callback: (...args: any[]) => void) => void;
}

const dummyApp = createApp({}); // Cria uma instância temporária para obter os métodos $on e $emit

const EventBus = createApp({}) as App & EventBusType;
export default EventBus as App & EventBusType;
