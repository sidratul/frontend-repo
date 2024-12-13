import { LogoutButton } from './(dashboard)/LogoutButton';
import { UserContent } from './(dashboard)/UserContent';

export default function Home() {
  return (
    <div>
      <LogoutButton/>
      <UserContent/>
    </div>
  );
}
