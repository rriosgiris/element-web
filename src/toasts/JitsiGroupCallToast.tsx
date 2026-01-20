/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Button } from "@vector-im/compound-web";
import VideoCallIcon from "@vector-im/compound-design-tokens/assets/web/icons/video-call-solid";

import { _t } from "../languageHandler";
import { MatrixClientPeg } from "../MatrixClientPeg";
import ToastStore from "../stores/ToastStore";
import LegacyCallHandler from "../LegacyCallHandler";

interface IProps {
    roomId: string;
    onDismiss?: () => void;
}

/**
 * Toast notification for when a Jitsi group call is started.
 * Displays the room name and a button to join the call.
 */
export default class JitsiGroupCallToast extends React.Component<IProps> {
    public render(): React.ReactNode {
        const room = MatrixClientPeg.safeGet().getRoom(this.props.roomId);
        const roomName = room?.name || _t("voip|unknown_caller");

        return (
            <div className="mx_JitsiGroupCallToast">
                <div className="mx_JitsiGroupCallToast_content">
                    <VideoCallIcon className="mx_JitsiGroupCallToast_icon" />
                    <div className="mx_JitsiGroupCallToast_text">
                        <div className="mx_JitsiGroupCallToast_title">
                            {_t("voip|jitsi_group_call_started" as any, { roomName: roomName })}
                        </div>
                        <div className="mx_JitsiGroupCallToast_description">
                            {_t("voip|jitsi_group_call_description" as any)}
                        </div>
                    </div>
                </div>
                <div className="mx_JitsiGroupCallToast_buttons">
                    <Button
                        onClick={this.onJoin}
                        kind="primary"
                        size="sm"
                    >
                        {_t("action|ok")}
                    </Button>
                    <Button
                        onClick={this.onDismiss}
                        kind="secondary"
                        size="sm"
                    >
                        {_t("action|dismiss")}
                    </Button>
                </div>
            </div>
        );
    }

    private onJoin = (): void => {
        // Clear the notification and sound when user joins
        LegacyCallHandler.instance.clearJitsiNotification(this.props.roomId);
    };

    private onDismiss = (): void => {
        // Call the parent dismiss callback (stops ring sound)
        if (this.props.onDismiss) {
            this.props.onDismiss();
        }
        ToastStore.sharedInstance().dismissToast(`jitsi_call_${this.props.roomId}`);
    };
}
