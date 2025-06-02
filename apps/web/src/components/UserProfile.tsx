import { Avatar, Button, Icon } from "@medium/design/components";

export default function UserProfile() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden">
          <Avatar.AvatarRoot size="lg">
            <Avatar.AvatarImage src="https://miro.medium.com/v2/resize:fill:176:176/1*x5L-AbiExS8Fzu9mMQQpWA.png"></Avatar.AvatarImage>
          </Avatar.AvatarRoot>
        </div>
        <h3 className="font-medium text-xl">Daniel Scott</h3>
        <p>3.9K followers</p>
        <p className="text-neutral-500 font-light text-sm">
          Full stack developer with 8 years of experience, dedicated to helping
          people land their dream jobs.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="red" width="full">
            Follow
          </Button>
          <Button variant="gray" iconOnly={true}>
            <Icon name="Ellipsis" />
          </Button>
        </div>
      </div>
    </div>
  );
}
