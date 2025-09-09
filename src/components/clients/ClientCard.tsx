import { Client } from '../../data/clients';

interface ClientCardProps {
  client: Client;
  index: number;
}

export const ClientCard = ({ client, index }: ClientCardProps) => {
  return (
    <a
      href={client.link}
      target="_blank"
      rel="noopener noreferrer"
      className="client-card group block"
      style={{ animationDelay: `${index * 200}ms` }}
      role="article"
      aria-label={`Client profile for ${client.username}`}
    >
      <div className="flex items-center gap-4 bg-zinc-900/50 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300">
        <div className="relative">
          <img
            src={client.avatar}
            alt={`${client.username}'s profile`}
            className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-[#7CFC00]/30 group-hover:ring-[#7CFC00] transition-all duration-300" />
        </div>
        
        <div className="text-left">
          <p className="font-medium text-white group-hover:text-[#7CFC00] transition-colors duration-300">
            {client.username}
          </p>
          <p className="text-sm text-gray-400">
            {client.handle}
          </p>
          {client.followers && (
            <p className="text-sm text-gray-400">
              {client.followers} subscribers
            </p>
          )}
        </div>
      </div>
    </a>
  );
};