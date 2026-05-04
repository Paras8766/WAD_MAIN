# 📦 File Transfer Between Ubuntu VM → Kali VM (Using OpenSSH & NAT Network)

This guide explains how to transfer a file between two VirtualBox VMs using SSH.

---

## 🧩 1. Configure Same NAT Network

In **Oracle VM VirtualBox**:

For both Ubuntu and Kali:

- Go to **Settings → Network**
- Adapter 1:
  ```
  Attached to: NAT Network
  Name: NatNetwork
  ```

If NAT Network doesn't exist:
- Go to **File → Tools → Network Manager → NAT Networks → Create**

---

## 🌐 2. Get Kali VM IP Address

Run on Kali:

```bash
ip a
```

Look for:
```
inet 10.x.x.x
```

Example:
```
10.0.2.15
```

---

## 🔐 3. Install and Start SSH Server (Kali)

```bash
sudo apt update
sudo apt install openssh-server -y
sudo systemctl start ssh
sudo systemctl enable ssh
```

Check status:

```bash
sudo systemctl status ssh
```

---

## 🧪 4. Test SSH Connection (Ubuntu → Kali)

```bash
ssh kali@<KALI_IP>
```

Example:
```bash
ssh kali@10.0.2.15
```

---

## 📂 5. Transfer File Using SCP

### 🔹 Ubuntu → Kali

```bash
scp file.txt kali@<KALI_IP>:/home/kali/
```

Example:
```bash
scp test.txt kali@10.0.2.15:/home/kali/
```

---

### 🔹 Kali → Ubuntu

```bash
scp kali@<KALI_IP>:/home/kali/file.txt .
```

---

## 📁 6. Transfer Folder

```bash
scp -r foldername kali@<KALI_IP>:/home/kali/
```

---

## 🚨 Common Errors & Fixes

### ❌ Connection Refused
```bash
sudo systemctl start ssh
```

### ❌ Permission Denied
- Check username (kali)
- Enter correct password

### ❌ Network Not Reachable
- Ensure both VMs use **NAT Network**, not plain NAT

---

## ✅ Summary

| Step | Command |
|------|--------|
| Get IP | `ip a` |
| Install SSH | `sudo apt install openssh-server` |
| Start SSH | `sudo systemctl start ssh` |
| Transfer File | `scp file.txt user@ip:/path` |

---

## 💡 Bonus (Optional)

### Password-less SSH (Optional)

On Ubuntu:

```bash
ssh-keygen
ssh-copy-id kali@<KALI_IP>
```

Now you can login without password.

---

## 🎯 Done!

You can now securely t