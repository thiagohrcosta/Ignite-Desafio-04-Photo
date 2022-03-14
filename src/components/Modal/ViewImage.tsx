import { 
  Image, 
  Link, 
  Modal, 
  ModalBody, 
  ModalContent, 
  ModalFooter, 
  ModalOverlay 
} from "@chakra-ui/react";

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="pGray.800" w="fit-content" maxW="full">
        <ModalBody w="fit-content" maxW="full" p={0}>
          <Image 
            src={imgUrl} 
            alt="" maxW={900} 
            maxH={600} 
            objectFit="cover" 
          />
        </ModalBody>
        <ModalFooter>
          <Link href={imgUrl} target="_blank" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}