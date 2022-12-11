// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare module 'akar-icons-svelte' {
	type AkarIcon = SvelteComponentTyped<{
		size?: number;
		color?: string;
		strokeWidth?: string;
		strokeLinecap?: string;
		strokeLinejoin?: string;
	}>;
	declare const Air: AkarIcon;
	declare const AirplayAudio: AkarIcon;
	declare const AirplayVideo: AkarIcon;
	declare const Airpods: AkarIcon;
	declare const Alarm: AkarIcon;
	declare const AlignBottom: AkarIcon;
	declare const AlignHorizontalCenter: AkarIcon;
	declare const AlignLeft: AkarIcon;
	declare const AlignRight: AkarIcon;
	declare const AlignToBottom: AkarIcon;
	declare const AlignToMiddle: AkarIcon;
	declare const AlignToTop: AkarIcon;
	declare const AlignTop: AkarIcon;
	declare const AlignVerticalCenter: AkarIcon;
	declare const AndroidFill: AkarIcon;
	declare const ArrowBack: AkarIcon;
	declare const ArrowBackThick: AkarIcon;
	declare const ArrowClockwise: AkarIcon;
	declare const ArrowCounterClockwise: AkarIcon;
	declare const ArrowCycle: AkarIcon;
	declare const ArrowDown: AkarIcon;
	declare const ArrowDownLeft: AkarIcon;
	declare const ArrowDownRight: AkarIcon;
	declare const ArrowDownThick: AkarIcon;
	declare const ArrowForward: AkarIcon;
	declare const ArrowForwardThick: AkarIcon;
	declare const ArrowLeft: AkarIcon;
	declare const ArrowLeftThick: AkarIcon;
	declare const ArrowRight: AkarIcon;
	declare const ArrowRightThick: AkarIcon;
	declare const ArrowUp: AkarIcon;
	declare const ArrowUpLeft: AkarIcon;
	declare const ArrowUpRight: AkarIcon;
	declare const ArrowUpThick: AkarIcon;
	declare const Attach: AkarIcon;
	declare const Backspace: AkarIcon;
	declare const BackspaceFill: AkarIcon;
	declare const BatteryFull: AkarIcon;
	declare const BatteryLow: AkarIcon;
	declare const BatteryMedium: AkarIcon;
	declare const Bell: AkarIcon;
	declare const Bicycle: AkarIcon;
	declare const BitcoinFill: AkarIcon;
	declare const Block: AkarIcon;
	declare const Bluetooth: AkarIcon;
	declare const Book: AkarIcon;
	declare const Bug: AkarIcon;
	declare const Calculator: AkarIcon;
	declare const Calendar: AkarIcon;
	declare const Camera: AkarIcon;
	declare const Check: AkarIcon;
	declare const Chess: AkarIcon;
	declare const ChevronDown: AkarIcon;
	declare const ChevronHorizontal: AkarIcon;
	declare const ChevronLeft: AkarIcon;
	declare const ChevronRight: AkarIcon;
	declare const ChevronUp: AkarIcon;
	declare const ChevronVertical: AkarIcon;
	declare const Circle: AkarIcon;
	declare const CircleAlert: AkarIcon;
	declare const CircleCheck: AkarIcon;
	declare const CircleChevronDown: AkarIcon;
	declare const CircleChevronLeft: AkarIcon;
	declare const CircleChevronRight: AkarIcon;
	declare const CircleChevronUp: AkarIcon;
	declare const CircleFill: AkarIcon;
	declare const CircleMinus: AkarIcon;
	declare const CirclePlus: AkarIcon;
	declare const CircleTriangleDown: AkarIcon;
	declare const CircleTriangleLeft: AkarIcon;
	declare const CircleTriangleRight: AkarIcon;
	declare const CircleTriangleUp: AkarIcon;
	declare const CircleX: AkarIcon;
	declare const Clipboard: AkarIcon;
	declare const Cloud: AkarIcon;
	declare const CloudDownload: AkarIcon;
	declare const CloudUpload: AkarIcon;
	declare const Coffee: AkarIcon;
	declare const Coin: AkarIcon;
	declare const Command: AkarIcon;
	declare const Comment: AkarIcon;
	declare const CommentAdd: AkarIcon;
	declare const Computing: AkarIcon;
	declare const Copy: AkarIcon;
	declare const CreditCard: AkarIcon;
	declare const Cross: AkarIcon;
	declare const DesktopDevice: AkarIcon;
	declare const Download: AkarIcon;
	declare const Draft: AkarIcon;
	declare const DribbbleFill: AkarIcon;
	declare const DropboxFill: AkarIcon;
	declare const Edit: AkarIcon;
	declare const Enlarge: AkarIcon;
	declare const Envelope: AkarIcon;
	declare const Eye: AkarIcon;
	declare const FaceHappy: AkarIcon;
	declare const FaceNeutral: AkarIcon;
	declare const FaceSad: AkarIcon;
	declare const FaceVeryHappy: AkarIcon;
	declare const FaceVerySad: AkarIcon;
	declare const FacebookFill: AkarIcon;
	declare const FigmaFill: AkarIcon;
	declare const File: AkarIcon;
	declare const Fire: AkarIcon;
	declare const Flag: AkarIcon;
	declare const Flashlight: AkarIcon;
	declare const Folder: AkarIcon;
	declare const FolderAdd: AkarIcon;
	declare const FullScreen: AkarIcon;
	declare const GameController: AkarIcon;
	declare const Gear: AkarIcon;
	declare const Gift: AkarIcon;
	declare const GithubFill: AkarIcon;
	declare const Glasses: AkarIcon;
	declare const Globe: AkarIcon;
	declare const GoogleContainedFill: AkarIcon;
	declare const GoogleFill: AkarIcon;
	declare const Grid: AkarIcon;
	declare const Hashtag: AkarIcon;
	declare const Headphone: AkarIcon;
	declare const Health: AkarIcon;
	declare const Heart: AkarIcon;
	declare const Height: AkarIcon;
	declare const Home: AkarIcon;
	declare const Image: AkarIcon;
	declare const Inbox: AkarIcon;
	// eslint-disable-next-line no-shadow-restricted-names
	declare const Infinity: AkarIcon;
	declare const Info: AkarIcon;
	declare const InstagramFill: AkarIcon;
	declare const Jar: AkarIcon;
	declare const LaptopDevice: AkarIcon;
	declare const Leaf: AkarIcon;
	declare const Lifesaver: AkarIcon;
	declare const LightBulb: AkarIcon;
	declare const LinkChain: AkarIcon;
	declare const LinkOff: AkarIcon;
	declare const LinkOn: AkarIcon;
	declare const LinkOut: AkarIcon;
	declare const LinkedInFill: AkarIcon;
	declare const Location: AkarIcon;
	declare const LockOff: AkarIcon;
	declare const LockOn: AkarIcon;
	declare const Map: AkarIcon;
	declare const Mention: AkarIcon;
	declare const Microphone: AkarIcon;
	declare const Miniplayer: AkarIcon;
	declare const Minus: AkarIcon;
	declare const MobileDevice: AkarIcon;
	declare const Money: AkarIcon;
	declare const Moon: AkarIcon;
	declare const MoreHorizontal: AkarIcon;
	declare const MoreVertical: AkarIcon;
	declare const NormalScreen: AkarIcon;
	declare const Paper: AkarIcon;
	declare const Pause: AkarIcon;
	declare const Pencil: AkarIcon;
	declare const Person: AkarIcon;
	declare const PersonAdd: AkarIcon;
	declare const PersonCheck: AkarIcon;
	declare const PersonCross: AkarIcon;
	declare const Phone: AkarIcon;
	declare const Pin: AkarIcon;
	declare const PinterestFill: AkarIcon;
	declare const Plane: AkarIcon;
	declare const Planet: AkarIcon;
	declare const Plant: AkarIcon;
	declare const Play: AkarIcon;
	declare const Plus: AkarIcon;
	declare const PointingUp: AkarIcon;
	declare const Question: AkarIcon;
	declare const Radish: AkarIcon;
	declare const RedditFill: AkarIcon;
	declare const Reduce: AkarIcon;
	declare const Ribbon: AkarIcon;
	declare const RockOn: AkarIcon;
	declare const Rss: AkarIcon;
	declare const Schedule: AkarIcon;
	declare const Scissor: AkarIcon;
	declare const Search: AkarIcon;
	declare const Send: AkarIcon;
	declare const ShareBox: AkarIcon;
	declare const Shield: AkarIcon;
	declare const ShoppingBag: AkarIcon;
	declare const SignOut: AkarIcon;
	declare const SoundDown: AkarIcon;
	declare const SoundOff: AkarIcon;
	declare const SoundOn: AkarIcon;
	declare const SoundUp: AkarIcon;
	declare const SoundcloudFill: AkarIcon;
	declare const SpotifyFill: AkarIcon;
	declare const Star: AkarIcon;
	declare const Stop: AkarIcon;
	declare const Sun: AkarIcon;
	declare const TabletDevice: AkarIcon;
	declare const Tag: AkarIcon;
	declare const TelegramFill: AkarIcon;
	declare const Telescope: AkarIcon;
	declare const TextAlignCenter: AkarIcon;
	declare const TextAlignJustified: AkarIcon;
	declare const TextAlignLeft: AkarIcon;
	declare const TextAlignRight: AkarIcon;
	declare const ThumbsDown: AkarIcon;
	declare const ThumbsUp: AkarIcon;
	declare const Thunder: AkarIcon;
	declare const Ticket: AkarIcon;
	declare const TrashBin: AkarIcon;
	declare const TrashCan: AkarIcon;
	declare const TriangleAlert: AkarIcon;
	declare const TriangleDown: AkarIcon;
	declare const TriangleLeft: AkarIcon;
	declare const TriangleRight: AkarIcon;
	declare const TriangleUp: AkarIcon;
	declare const Trophy: AkarIcon;
	declare const TumblrFill: AkarIcon;
	declare const TwitterFill: AkarIcon;
	declare const Utensils: AkarIcon;
	declare const VictoryHand: AkarIcon;
	declare const VkFill: AkarIcon;
	declare const VrAr: AkarIcon;
	declare const Wallet: AkarIcon;
	declare const WatchDevice: AkarIcon;
	declare const Water: AkarIcon;
	declare const Width: AkarIcon;
	declare const Wifi: AkarIcon;
	declare const YoutubeFill: AkarIcon;
	declare const ZoomIn: AkarIcon;
	declare const ZoomOut: AkarIcon;
}