import { useContext } from "react";
import GlobalContext from '../../provider/GlobalContext';
import { EditButton } from "./index.styled-components";

const MyProfile = () => {
    const { loggedInProfile } = useContext(GlobalContext);

    if (!loggedInProfile) return null;

    return (
        <div className="flex flex-col">
            <div className="text-base font-semibold border-b p-4">
                <div>Akun Saya</div>
            </div>
            <div className="flex py-6 px-4 gap-4">
                <div className="flex-1">
                    <h5 className="mb-6">Biodata Diri</h5>
                    <div>
                        <label className="text-sm block mb-2">Nama</label>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold">{loggedInProfile.fullname}</span>
                            <EditButton type="button">Ubah</EditButton>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h5 className="mb-6">Kontak</h5>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm block mb-2">Email</label>
                            <div className="flex items-center gap-3">
                                <span className="font-semibold">{loggedInProfile.email}</span>
                                <EditButton type="button">Ubah</EditButton>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm block mb-2">Telepon</label>
                            <div className="flex items-center gap-3">
                                <span className="font-semibold">{loggedInProfile.phone}</span>
                                <EditButton type="button">Ubah</EditButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;