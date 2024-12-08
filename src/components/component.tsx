import { DomainsPage } from "@absmach/magistrala-sdk";

export default async function PublicComponent({
  domains,
}: {
  domains: DomainsPage;
}) {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">
        This is the public repo component
      </h2>
      {domains.domains.map((domain) => (
        <div
          key={domain.id}
          className="border rounded-md p-4 flex flex-col gap-4"
        >
          <span>Name: {domain.name}</span>
          <span>ID: {domain.id}</span>
          <span>Alias: {domain.alias}</span>
          <span>Permissions: {domain.permission}</span>
          <span>Tags: {domain.tags}</span>
        </div>
      ))}
    </div>
  );
}
