import { Kafka } from 'kafkajs';

const kafka = new Kafka({ clientId: 'astramind-stream', brokers: ['localhost:9092'] });

export async function startKafkaConsumer() {
  const consumer = kafka.consumer({ groupId: 'astramind-group' });
  await consumer.connect();
  await consumer.subscribe({ topic: 'astramind-events', fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Kafka ${topic}/${partition}: ${message.value?.toString()}`);
    },
  });
}
