import type { Channel, StreamChat, User } from "stream-chat"


export interface AIAgent {
    user?: User
    channel: Channel
    chatClient: StreamChat
    getLastInteraction: () => number
    init: () => Promise<void>;
    dispose: () => Promise<void>;


}

// Purpose: The AIAgent interface defines the structure that any AI agent must adhere to. It specifies the properties and methods that an AI agent should implement.

// Properties:
// user?: User: An optional property that represents the user associated with the AI agent. The ? indicates that this property is not required.
// channel: Channel: A required property that specifies the chat channel the agent will operate in.
// chatClient: StreamChat: A required property that holds the instance of the chat client used for communication.
// Methods:
// getLastInteraction: () => number: A method that returns a number, likely representing a timestamp or an interaction count. This method is expected to be implemented to provide information about the last interaction the agent had.
// init: () => Promise<void>: An asynchronous method that initializes the agent. It returns a promise that resolves when the initialization is complete.
// dispose: () => Promise<void>: An asynchronous method that cleans up resources when the agent is no longer needed. It also returns a promise that resolves when the disposal is complete.
    
// 3. Enumeration: AgentPlatform
// export enum AgentPlatform {
//     OPENAI = "openai",
//     WRITING_ASSISTANT = "writing_assistant"
// }
// Purpose: The AgentPlatform enum defines a set of named constants that represent different platforms the AI agent can operate on.
// Values:
// OPENAI: Represents the OpenAI platform.
// WRITING_ASSISTANT: Represents a writing assistant platform.
// Key Concepts and Best Practices
// Type Safety: By using TypeScript's type system, the code ensures that any implementation of the AIAgent interface adheres to the defined structure, reducing runtime errors.
// Asynchronous Programming: The use of Promise<void> in the init and dispose methods indicates that these operations may involve asynchronous tasks, such as network requests or resource management.
// Optional Properties: The use of optional properties (e.g., user?) allows for flexibility in the implementation of the interface, accommodating different use cases.

export enum AgentPlatform {
    OPENAI = "openai",
    WRITING_ASSISTANT = "writing_assistant"
}


export interface WritingMessage {
    custom?: {
        suggestions?: string[]
        writingTask?: string[]
        messageType?: "user_input" | "ai_response" | "system_message"
    };
}
